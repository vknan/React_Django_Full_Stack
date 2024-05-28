from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    
    def get(self, request):
        user = request.user
        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
        }
        return Response(user_data, status=status.HTTP_200_OK)
