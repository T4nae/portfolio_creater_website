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
    path('portfolio/', views.portfolio, name='portfolio'),
    path('portfolio/edit/', views.portfolio_edit, name='portfolio_edit'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
