from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import render, redirect
from .models import Portfolio


def home(request):
    context = {}
    session = request.session
    if session.get('login_error', None):
        context['login_error'] = session['login_error']
        if session.get('username', None):
            context['username'] = session['username']
            session.pop('username')
        if session.get('password', None):
            context['password'] = session['password']
            session.pop('password')
        session.pop('login_error')
    return render(request, 'main/home.html', context)


def about(request):
    return render(request, 'main/about.html')


def contact(request):
    if request.method == 'GET':
        return render(request, 'main/contact.html')
    else:
        name = request.POST.get('name', None)
        email = request.POST.get('email', None)
        message = request.POST.get('message', None)
        print(name, email, message)
        if name == '' or email == '' or message == '':
            return render(request, 'main/contact.html', {'messages': [{'type': 'error', 'message': 'Please fill all the fields'}]})
        return render(request, 'main/contact.html', {'messages': [{'type': 'success', 'message': 'Message sent successfully'}]})


def login_request(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        session = request.session
        next = request.POST.get('next')
        if username == '' and password == '':
            session['login_error'] = "Enter username and password"
            return redirect(next)
        elif username == '' and password != '':
            session['login_error'] = "Enter username"
            session['password'] = password
            return redirect(next)
        elif username != '' and password == '':
            session['login_error'] = "Enter password"
            session['username'] = username
            return redirect(next)

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(next)
        else:
            session['login_error'] = "Invalid username or password"
            return redirect(next)


def logout_request(request):
    logout(request)
    return redirect(request.META.get('HTTP_REFERER'))


def register(request):
    context = {}
    if request.method == 'GET':
        session = request.session
        if session.get('login_error', None):
            context['login_error'] = session['login_error']
            if session.get('username', None):
                context['username'] = session['username']
                session.pop('username')
            if session.get('password', None):
                context['password'] = session['password']
                session.pop('password')
            session.pop('login_error')
        return render(request, 'main/register.html', context)
    else:
        username = request.POST.get('username', None)
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        password2 = request.POST.get('password2', None)
        if password == password2:
            if User.objects.filter(username=username).exists():
                return redirect('main:register')
            else:
                if User.objects.filter(email=email).exists():
                    return redirect('main:register')
                else:
                    user = User.objects.create_user(
                        email=email, username=username, password=password)
                    user.save()
                    login(request, user)
                    return redirect('main:home')
        else:
            return redirect('main:register')


def portfolio(request, name=None):
    context = {}
    try:
        user = User.objects.get(username=name)
        data = Portfolio.objects.filter(user=user)
        session = request.session
        if session.get('login_error', None):
            context['login_error'] = session['login_error']
            if session.get('username', None):
                context['username'] = session['username']
                session.pop('username')
            if session.get('password', None):
                context['password'] = session['password']
                session.pop('password')
            session.pop('login_error')
        portfolio = []
        for item in data:
            if item.type == 'text' and item.content != '' and item.title != '':
                element = "<div class='" + \
                    item.Class + "'>"
                element += "<h3 style='"+ item.style +"'>" + item.title + "</h3>"
                element += "<p style='"+ item.style +"'>" + item.content + "</p>"
                element += "</div>"
                portfolio.append({"element": element, "id": item.id})
            elif item.type == 'text' and item.content != '' and item.title == '':
                element = "<div class='" + \
                    item.Class + "'>"
                element += "<p style='"+ item.style +"'>" + item.content + "</p>"
                element += "</div>"
                portfolio.append({"element": element, "id": item.id})
            elif item.type == 'text' and item.content == '' and item.title != '':
                element = "<div class='" + \
                    item.Class + "'>"
                element += "<h3 style='"+ item.style +"'>" + item.title + "</h3>"
                element += "</div>"
                portfolio.append({"element": element, "id": item.id})
            elif item.type == 'image':
                element = "<div class='" + \
                    item.Class + "'>"
                element += "<img src='" + item.content + "' alt='" + \
                    item.title + "' title='" + item.title + "' style='" + item.style + "'>"
                element += "</div>"
                portfolio.append({"element": element, "id": item.id})
            elif item.type == 'video':
                element = "<div class='" + \
                    item.Class + "' style='" + item.style + "'>"
                element += "<video controls>"
                element += "<source src='" + item.content + "' type='video/mp4'>"
                element += "</video>"
                element += "</div>"
                portfolio.append({"element": element, "id": item.id})
            elif item.type == 'audio':
                element = "<div class='" + \
                    item.Class + "' style='" + item.style + "'>"
                element += "<audio controls>"
                element += "<source src='" + item.content + "' type='audio/mpeg'>"
                element += "</audio>"
                element += "</div>"
                portfolio.append({"element": element, "id": item.id})

        context['portfolio'] = portfolio
        return render(request, 'main/portfolio.html', context)
    except:
        return HttpResponse("User not found")


def portfolio_edit(request, name=None):
    if request.method == 'POST':
        print('request received')
        user = User.objects.get(username=name)
        if user != request.user:
            print('user not allowed')
            return HttpResponse("You are not allowed to edit this portfolio")
        if request.POST.get('delete', None):
            print('delete request received')
            id = request.POST.get('delete', None)
            Portfolio.objects.get(id=id).delete()
            return redirect('main:portfolio', name=name)
        print('save request received')
        type = request.POST.get('type', 'text')
        title = request.POST.get('title', '')
        content = request.POST.get('content', '')
        Class = request.POST.get('class', '')
        style = request.POST.get('css', '')
        print(type, title, content, Class, style)
        portfolio = Portfolio(user=user, type=type, title=title,
                              content=content, Class=Class, style=style)
        portfolio.save()
        return redirect('main:portfolio', name=name)
