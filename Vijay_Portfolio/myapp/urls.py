from django.urls import path, include
from . import views
# from django.contrib.auth import views  as auth_views

urlpatterns = [
    path('api/courses/', views.CourseList.as_view(), name='course-list'),
    path('api/courses/<int:pk>', views.CourseDetail.as_view(), name='course-detail'),
    

    path('api/posts/', views.PostList.as_view(), name='post-list'),
    path('api/posts/<int:pk>', views.PostDetail.as_view(), name='post-detail'),
    

    path('api/comments/', views.CommentList.as_view(), name='comment-list'),
    path('api/comments/<int:pk>', views.CommentDetail.as_view(), name='comment-detail'),
    

    path('api/contacts/', views.ContactList.as_view(), name='contact-list'),
    path('api/contacts/<int:pk>', views.ContactDetail.as_view(), name='contact-detail'),
    

    path('api/categories/', views.CategoryList.as_view(), name='category-list'),
    path('api/categories/<int:pk>', views.CategoryDetail.as_view(), name='category-detail'),
    
    path('api/abouts/', views.aboutList.as_view(), name='about-list'),
    path('api/abouts/<int:pk>', views.aboutDetail.as_view(), name='about-detail'),
    

    path('api/tags/', views.TagList.as_view(), name='tag-list'),
    path('api/tags/<int:pk>', views.TagDetail.as_view(), name='tag-detail'),
    
    path('api/lessons/', views.LessonList.as_view(), name='lesson-list'),
    path('api/lessons/<int:pk>', views.LessonDetail.as_view(), name='lesson-detail'),
    

    path('api/quiz/', views.QuizList.as_view(), name='quiz-list'),
    path('api/quiz/<int:pk>', views.QuizDetail.as_view(), name='quiz-detail'),
    

    path('api/modules/', views.ModuleList.as_view(), name='module-list'),
    path('api/modules/<int:pk>', views.ModuleDetail.as_view(), name='module-detail'),

    path('api/submodules/', views.SubModuleList.as_view(), name='module-list'),
    path('api/submodules/<int:pk>', views.SubModuleDetail.as_view(), name='module-detail'),
    

    path('api/enrollments/', views.EnrollmentList.as_view(), name='enrollments-list'),
    path('api/enrollments/<int:pk>', views.EnrollmentDetail.as_view(), name='enrollments-detail'),
    

    path('api/discussionposts/', views.DiscussionPostList.as_view(), name='discussionpost-list'),
    path('api/discussionposts/<int:pk>', views.DiscussionPostDetail.as_view(), name='discussionpost-detail'),
    

    path('api/progress/', views.ProgressList.as_view(), name='progres-list'),
    path('api/progress/<int:pk>', views.ProgressDetail.as_view(), name='progres-detail'),
   
    path('user/register/', views.login_functionality.register, name = 'register'),
    path('accounts/login/', views.login_functionality.login, name = 'login'),
    # path('logout/', views.login_functionality.logout, name = 'logout'),
    path('customlogout/', views.login_functionality.customlogout, name='customlogout'),
   
    path('Computer_Science_Fundamentals/', views.pages.post_CSF, name='post_CSF'),

    # path('analytics/', views.pages.analytics_view, name='user-analytics'),
    path('', views.pages.home, name = 'home'),
    path('about/', views.pages.about, name = 'about'),
    # path('services/', views.pages.services, name = 'services'),
    # path('Templates/', views.pages.Templates, name = 'Templates'),
    path('blog/', views.pages.blog, name = 'blog'),
    path('contact/', views.pages.contact, name = 'contact'),
    path('blog_single/<str:title>/', views.pages.blog_single, name = 'blog_single'),
    path('search/', views.pages.search, name = 'search'),
    path('comment/', views.pages.post_comment, name = 'comment'),
    path('termsandconditions/', views.pages.termsandconditions, name = 'termsandconditions'),
    path('privacypolicy/', views.pages.privacypolicy, name = 'privacypolicy'),
    path('refundpolicy/', views.pages.refundpolicy, name = 'refundpolicy'),
    path('ckeditor/upload/', views.ckeditor_5_upload_file_view.ck_editor_5_upload_file, name='ck_editor_5_upload_file'),

    # path('accounts/password-reset/', auth_views.PasswordResetView.as_view(template_name='templates/login_func/password_reset.html'), name='password_reset'),
    # path('accounts/password-reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='templates/login_func/password_reset_done.html'), name='password_reset_done'),
    # path('accounts/password-reset/confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='templates/login_func/password_reset_confirm.html'), name='password_reset_confirm'),
    # path('accounts/password-reset/complete/', auth_views.PasswordResetCompleteView.as_view(template_name='templates/login_func/password_reset_complete.html'), name='password_reset_complete'),
    
    
    # path('download_file/<int:file_id>/', views.PaymentProcess.download_file, name = 'download_file'),
    # path('file_detail/<int:file_id>/', views.PaymentProcess.file_detail, name = 'file_detail'),
    # path('checkout/', views.PaymentProcess.checkout, name = 'checkout'),
    # path('process_order/', views.PaymentProcess.process_order, name = 'process_order'),
    # path('placed_order/<int:file_id>/', views.PaymentProcess.placed_order, name = 'placed_order'),

    # path('dashboard/', views.pages.dashboard, name='dashboard'),
    
]
