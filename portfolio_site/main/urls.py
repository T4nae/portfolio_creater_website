from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'main'
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('register/', views.register, name='register'),
    path('login/', views.login_request, name='login'),
    path('logout/', views.logout_request, name='logout'),
    path('portfolio/<str:name>/', views.portfolio, name='portfolio'),
    path('portfolio/<str:name>/edit/', views.portfolio_edit, name='portfolio_edit'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
