from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse("Hello World")

def about(request):
    return HttpResponse("About Page")

def contact(request):
    return HttpResponse("Contact Page")

def register(request):
    return HttpResponse("Register Page")

def portfolio(request):
    return HttpResponse("Portfolio Page")

def portfolio_edit(request):
    return HttpResponse("Portfolio Edit Page")