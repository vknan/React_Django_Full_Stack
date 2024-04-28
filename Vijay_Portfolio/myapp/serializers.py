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

