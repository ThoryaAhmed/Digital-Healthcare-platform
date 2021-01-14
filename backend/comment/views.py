from rest_framework import viewsets
from rest_framework import permissions
from .serializers import CommentSerializer
from .models import Comment
from django.shortcuts import render, get_object_or_404

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer