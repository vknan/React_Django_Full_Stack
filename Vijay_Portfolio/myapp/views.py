from django.shortcuts import render, redirect, get_object_or_404
# Create your views here.
from django.http import JsonResponse
from django.conf import settings
from django.utils.text import slugify
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import *
from django.core.paginator import Paginator
from django.http import HttpResponse, HttpResponseServerError
from rest_framework import generics
from .serializers import *
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import os
import json
import logging

logger = logging.getLogger(__name__)


#=========================================================================================================================================
class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


#=========================================================================================================================================
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

#=========================================================================================================================================
class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

#=========================================================================================================================================
class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

#=========================================================================================================================================
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

#=========================================================================================================================================
class aboutList(generics.ListCreateAPIView):
    queryset = about.objects.all()
    serializer_class = aboutSerializer

class aboutDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = about.objects.all()
    serializer_class = aboutSerializer

#=========================================================================================================================================
class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

#=========================================================================================================================================
class LessonList(generics.ListCreateAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):
        queryset = Lesson.objects.all()
        course_id = self.request.query_params.get('course_id')
        if course_id:
            queryset = queryset.filter(course_id=course_id)
        return queryset

class LessonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

#=========================================================================================================================================
class ModuleList(generics.ListCreateAPIView):
    serializer_class = ModuleSerializer
    def get_queryset(self):
        queryset = Module.objects.all()
        lesson_id = self.request.query_params.get('lesson_id')
        if lesson_id:
            queryset = queryset.filter(lesson_id=lesson_id)
        return queryset
    

class ModuleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

#=========================================================================================================================================
class QuizList(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

#=========================================================================================================================================
class EnrollmentList(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    def get_queryset(self):
        queryset = Enrollment.objects.all()
        user_id = self.request.query_params.get('user_id')
        course_id = self.request.query_params.get('course_id')
        if user_id:
            queryset = queryset.filter(user_id=user_id)
        if course_id:
            queryset = queryset.filter(course_id=course_id)
        return queryset


# class enroll(APIView):
#     permission_classes = [IsAuthenticated]
#     queryset = Enrollment.objects.all()
#     serializer_class = EnrollmentSerializer
    
@method_decorator(csrf_exempt, name='dispatch')
def enroll_course(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            logger.info(f'Received data: {data}')  # Log the received data
            user_id = data.get('user_id')
            course_id = data.get('course_id')
            print(user_id, course_id)

            if not user_id or not course_id:
                logger.error('User ID and Course ID are required')
                return JsonResponse({'error': 'User ID and Course ID are required'}, status=400)

            enrollment, created = Enrollment.objects.get_or_create(
                user_id=user_id, 
                course_id=course_id
            )
            enrollment.enrolled = True
            enrollment.save()
            return JsonResponse({'message': 'Enrolled successfully'}, status=200)
        except json.JSONDecodeError:
            logger.error('Invalid JSON received')
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            logger.error(f'Error: {str(e)}')
            return JsonResponse({'error': str(e)}, status=500)

    logger.error('Invalid request method')
    return JsonResponse({'error': 'Invalid request method'}, status=405)

class unenroll(APIView):
    permission_classes = [IsAuthenticated]
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    
    def post(self, request):
        data = json.loads(request.body)
        user_id = data.get('user_id')
        course_id =data.get('course_id')
        if not user_id or not course_id:
            return Response({"error": "Course ID & User ID are required."}, status=status.HTTP_400_BAD_REQUEST)
        print(user_id, course_id)
        
        enrollment = Enrollment.objects.filter(user=user_id, course=course_id).first()

        if not enrollment:
            return Response({"error": "Enrollment not found."}, status=status.HTTP_404_NOT_FOUND)

        enrollment.enrolled = False
        enrollment.save()
        return Response({"message": "Unenrolled successfully."}, status=status.HTTP_200_OK)
    
class EnrollmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    
class UserEnrollments(APIView):
    permission_classes = [IsAuthenticated]
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    
    
    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        enrollments = Enrollment.objects.filter(user=user, enrolled=True)
        enrolled_courses = [enrollment.course.id for enrollment in enrollments]
        return Response(enrolled_courses, status=status.HTTP_200_OK)
#=========================================================================================================================================

class DiscussionPostList(generics.ListCreateAPIView):
    queryset = DiscussionPost.objects.all()
    serializer_class = DiscussionPostSerializer

class DiscussionPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DiscussionPost.objects.all()
    serializer_class = DiscussionPostSerializer

#=========================================================================================================================================

class ProgressList(generics.ListCreateAPIView):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

class ProgressDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

#=========================================================================================================================================
class SubModuleList(generics.ListCreateAPIView):
    serializer_class = SubModuleSerializer
    def get_queryset(self):
        queryset = SubModule.objects.all()
        module_id = self.request.query_params.get('module_id')
        if module_id:
            queryset = queryset.filter(module_id=module_id)
        return queryset
    

class SubModuleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SubModule.objects.all()
    serializer_class = SubModuleSerializer
#=========================================================================================================================================


#=========================================================================================================================================
#=========================================================================================================================================
#=========================================================================================================================================
class ckeditor_5_upload_file_view():
    def ck_editor_5_upload_file(request):
        if request.method == 'POST' and request.FILES.get('upload'):
            uploaded_file = request.FILES['upload']

            # Get the original filename
            original_filename = uploaded_file.name

            # Split the filename and extension
            file_name, file_extension = os.path.splitext(original_filename)

            # Generate a unique filename using the original filename (without slugifying)
            filename = slugify(file_name) + file_extension

            # Save the uploaded file to the 'post/images/' directory within MEDIA_ROOT
            file_path = f'post/{filename}'  # Relative path within 'media' directory
            full_file_path = os.path.join(settings.MEDIA_ROOT, file_path)  # Full absolute path

            # Write the file to the filesystem
            with open(full_file_path, 'wb') as file:
                for chunk in uploaded_file.chunks():
                    file.write(chunk)

            # Construct the URL to access the uploaded file publicly
            public_url = settings.MEDIA_URL + file_path  # Full URL starting from MEDIA_URL
            
            # Return a JSON response with the uploaded file details
            return JsonResponse({'uploaded': True, 'url': public_url})

        # If no file was uploaded or request method is not POST, return failure response
        return JsonResponse({'uploaded': False}, status=400)

#==============================Without Login============================
class pages:
    @staticmethod
    def home(request):
        return render(request, 'pages/index.html')
   
    @staticmethod
    def post_CSF(request):
        return render(request, 'pages/post.html')

    @staticmethod
    def about(request):
        return render(request, 'pages/about.html')

    @staticmethod
    def blog(request):
        category_name = request.GET.get('category')
        posts = Post.objects.filter(is_published=True).order_by('-posted_at')
        
        if category_name:
            posts = posts.filter(category__name=category_name)
        
        paginator = Paginator(posts, 10)
        page = request.GET.get('page')
        posts = paginator.get_page(page)
        
        categories = Category.objects.all()
        
        context = {
            'posts': posts,
            'categories': categories
        }
        return render(request, 'pages/blog.html', context)
    
    @staticmethod
    def blog_single(request, title):
        posts = Post.objects.get(title = title, is_published=True)
        recent_posts = Post.objects.filter(is_published=True).order_by('-posted_at')[:5]
        Categories = Category.objects.all()
        comments = Comment.objects.filter(post = posts)
        context = {'posts':posts, 'recent_posts':recent_posts , 'Categories': Categories, 'comments':comments}
        return render(request, 'pages/blog-single.html', context)
    @staticmethod
    def search(request):
        search_query = request.GET.get('q')
        posts = Post.objects.filter(is_published=True, title__icontains=search_query)
        context = {
            'posts':posts
            }
        return render(request, 'pages/blog.html', context)
        # rest of the view code
    
    @staticmethod
    def contact(request):
        context = {}
        if request.method == 'GET':
            return render(request, 'pages/contact.html')
        try:
            if request.method == 'POST':
                name = request.POST.get('name')
                email = request.POST.get('email')
                subject = request.POST.get('subject')
                message = request.POST.get('message')
                c = Contact(name = name, email=email, subject= subject, message=message)
                context = {'sent_message': 'Your message has been sent. Thank you!'}
                c.save()
                return render(request, 'pages/contact.html', context)
        except Exception as e:
            context['error_message'] = f'An error occurred: {str(e)}'
            return HttpResponseServerError('Internal Server Error')
        
        return HttpResponse('Invalid request')
    
    @staticmethod
    @login_required
    def post_comment(request):
        if request.method == 'POST':
            name = request.POST.get('name')
            email = request.POST.get('email')
            comment = request.POST.get('comment')
            website = request.POST.get('website')
            post_id = request.POST.get('id')
            
            post = Post.objects.get(id=post_id)

            c= Comment(name = name, email=email, comment= comment, website=website, post = post)
            c.save()
            return redirect('blog_single', title=post.title)

        
        return redirect('blog')


    @staticmethod
    def termsandconditions(request):
        return render(request, 'pages/terms_and_conditions.html')
    @staticmethod
    def privacypolicy(request):
        return render(request, 'pages/privacy_policy.html')
    @staticmethod
    def refundpolicy(request):
        return render(request, 'pages/refund_policy.html')
    

class login_functionality(pages):   
    @staticmethod
    def register(request):
        if request.method == 'POST':
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']
            password2 = request.POST['password2']
            if password == password2:
                if User.objects.filter(email=email).exists():
                    messages.info(request, "Email already Used")
                    return redirect('register')
                elif User.objects.filter(username=username).exists():
                    messages.info(request, 'Username Already Used')
                    return redirect('register')
                else:
                    user = User.objects.create_user(username = username, email =email, password = password)
                    user.save()
                    return redirect('login')
            else:
                messages.info(request, 'Password Not The Same')
                return redirect('register')
        return render(request, 'login_func/register.html')
    @staticmethod
    def login(request):
        url = request.get_full_path()
        # print(url)
        if (request.method == 'POST') :
            username = request.POST['username']
            password = request.POST['password']
            user = auth.authenticate(username = username, password = password)

            if user is not None:
                auth.login(request, user)
                # customer, created = Customer.objects.get_or_create(user=user)
                return redirect('home')
            else:
                messages.info(request, 'Credentials Invalid')
                return redirect('login')
            # return render(request, '/myproject/templates/login_func/login.html')
        else:
            return render(request, 'login_func/login.html')

    @staticmethod
    def customlogout(request):
        auth.logout(request)
        return redirect ('home')
        