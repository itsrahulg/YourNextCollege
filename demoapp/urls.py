from django.urls import path,include
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static



urlpatterns=[
    path('', views.landing_page, name='landingpage.html'),
    path('login/', views.login_page, name='login-page'),
    path('login/', views.login_page, name='login-page.html'),
    path('register/', views.register_form, name='register-form.html'),
    path('register/', views.register_form, name='register-form'),
    path('logout/',views.logout,name="logout"),
    path('profile/',views.profile_page,name='profile-page'),
    path('college/',views.college,name=''),
    path('collegedata/', views.college_data, name='college-display-page.html'),
    path('universitydata/',views.university_data, name='university-display-page.html'),
    path('standalonedata/',views.standalone_data, name='standalone-display-page.html'),
    path('standalonedata/',views.standalone_data, name='standalone_data'),
    path('institutions/',views.institutions,name='institutions.html'),
    path('recommendations/',views.recommendations,name='recommendations.html')
]

urlpatterns += staticfiles_urlpatterns()

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
