from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User  # Assuming User model is from django.contrib.auth

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']  # Add other fields as needed

class CourseSerializer(serializers.ModelSerializer):
    instructor = UserSerializer() 
    class Meta:
        model = Course
        fields = ['id', 'title', 'description','created','lottieicon', 'instructor']



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    category = CategorySerializer()
    class Meta:
        model = Post
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class aboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = about
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'



class LessonSerializer(serializers.ModelSerializer):
    course = CourseSerializer()
    class Meta:
        model = Lesson
        fields = '__all__'




class ModuleSerializer(serializers.ModelSerializer):
    lesson = LessonSerializer()
    class Meta:
        model = Module
        fields = '__all__'
class SubModuleSerializer(serializers.ModelSerializer):
    module = ModuleSerializer()
    instructor = UserSerializer()
    class Meta:
        model = SubModule
        fields = '__all__'

class QuizSerializer(serializers.ModelSerializer):
    course = CourseSerializer()
    class Meta:
        model = Quiz
        fields = '__all__' 

class EnrollmentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    course = CourseSerializer()
    class Meta:
        model = Enrollment
        fields = '__all__'

class DiscussionPostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    lesson = LessonSerializer()
    class Meta:
        model = DiscussionPost
        fields = '__all__'
    

class ProgressSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    lesson = LessonSerializer()
    class Meta:
        model = Progress
        fields = '__all__'

