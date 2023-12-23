from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import *
from django.contrib import *
from django.urls import *

from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import EducationalInstitution
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json
from django.shortcuts import render  
import requests

def landing_page (request):
    return render(request,"landingpage.html")

def login_page(request):
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect ('/')
        else:
            messages.info(request,'Invalid Credentials')
            return redirect('login-page')
    else:
        return render(request, "login-page.html")
def logout(request):
    auth.logout(request)
    return redirect('/')

def register_form(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        username=first_name+last_name
        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, "Username already in use")
                return redirect('register-form')  # Use the URL pattern name
            elif User.objects.filter(email=email).exists():
                messages.info(request, "Email already in use")
                return redirect('register-form')
            else:
                user = User.objects.create_user(username=username, password=password,email=email,first_name=first_name,last_name=last_name,)
                user.save()
                return redirect('login-page')  # Use the URL pattern name
        else:
            messages.info(request, 'Passwords do not match')
            return redirect('register-form')  # Use the URL pattern name
    else:

        return render(request, 'register-form.html')
def profile_page(request):
    return render(request,'profile-page.html')
def college(request):
    return render(request,'college-display-page.html')
def institutions(request):
    return render(request,'institutions.html')
def recommendations(request):
    return render(request,'recommendations.html')

def college_data(request):

    if request.method == 'GET':
        s_no = request.GET.get('s_no')
        U_name = request.GET.get('U_name')
        C_name = request.GET.get('C_name')
        C_type = request.GET.get('college-type')
        s_name = request.GET.get('state')
        D_name = request.GET.get('district')

        api_url = "https://api.data.gov.in/resource/44bea382-c525-4740-8a07-04bd20a99b52"

        api_key = "579b464db66ec23bdd00000114670cbdeae84e5d707b6c1402b69cd6"

        format_param = "json"
        limit = 100

        api_url += f"?api-key={api_key}&format={format_param}&limit={limit}"

        if D_name:
            D_name = D_name.replace("-","%20")
            api_url += f"&filters%5Bdistrict_name%5D={D_name}"

        if C_type:
            if C_type=="select":
                pass
            else:
                C_type = C_type.replace("-", "%20")
                if C_type=="PGCenter":
                    C_type="PG%20Center%20%2F%20Off-Campus%20Center"
                
                api_url += f"&filters%5Bcollege_type%5D={C_type}"
        if s_name:
            if s_name=="Select":
                pass
            else:
                s_name = s_name.replace("_", "%20")
                api_url += f"&filters%5Bstate_name%5D={s_name}"
        

        response = requests.get(api_url)

        records = response.json().get('records', [])

    if response.status_code == 200:
        return render(request, 'college-display-page.html', {'records': records})
    else:
        return render(request, 'college-display-page.html', {'error': 'Failed to fetch data from the API'})

    

def university_data(request):
    if request.method == 'GET':

        C_type = request.GET.get('college-type')
        s_name = request.GET.get('state')

        ai="https://api.data.gov.in/resource/945b77d8-c0cd-42b3-b49b-01e36aeee5ea?api-key=579b464db66ec23bdd00000114670cbdeae84e5d707b6c1402b69cd6&format=json"

        api_url = "https://api.data.gov.in/resource/945b77d8-c0cd-42b3-b49b-01e36aeee5ea"

        api_key = "579b464db66ec23bdd00000114670cbdeae84e5d707b6c1402b69cd6"

        format_param = "json"
        limit = 100

        api_url += f"?api-key={api_key}&format={format_param}&limit={limit}"


        if C_type:
            if C_type=="select":
                pass
            else:
                api_url += f"&filters%5Buniversity_type%5D={C_type}"
        if s_name:
            if s_name=="Select":
                pass
            else:
                s_name = s_name.replace("_", "%20")
                api_url += f"&filters%5Bstate_name%5D={s_name}"
        

        response = requests.get(api_url)

        records = response.json().get('records', [])

    if response.status_code == 200:
        return render(request, 'university-display-page.html', {'records': records})
    else:
        return render(request, 'university-display-page.html', {'error': 'Failed to fetch data from the API'})



def standalone_data(request):
    if request.method == 'GET':
        s_no = request.GET.get('s_no')
        U_name = request.GET.get('U_name')
        C_name = request.GET.get('C_name')
        C_type = request.GET.get('college-type')
        s_name = request.GET.get('state')
        D_name = request.GET.get('district')

        api_url = "https://api.data.gov.in/resource/db797fb9-af2b-470d-8581-66d06aff666d"

        api_key = "579b464db66ec23bdd00000114670cbdeae84e5d707b6c1402b69cd6"

        format_param = "json"
        limit = 100

        api_url += f"?api-key={api_key}&format={format_param}&limit={limit}"

        if D_name:
            D_name = D_name.replace("-", "%20")
            api_url += f"&filters%5Bdistrict_name%5D={D_name}"

        if C_type:
            if C_type == "select":
                pass
            else:
                C_type = C_type.replace("-", "%20")
                if C_type == "PGCenter":
                    C_type = "PG%20Center%20%2F%20Off-Campus%20Center"
                api_url += f"&filters%5Binstitution_type%5D={C_type}"

        if s_name:
            if s_name == "Select":
                pass
            else:
                s_name = s_name.replace("_", "%20")
                api_url += f"&filters%5Bstate_name%5D={s_name}"

        response = requests.get(api_url)

        records = response.json().get('records', [])
        
        if response.status_code == 200:
            # Use the 'render' function instead of 'redirect'
            return render(request, 'standalone-display-page.html', {'records': records})
        else:
            # Handle the error case
            return render(request, 'standalone-display-page.html', {'error': 'Failed to fetch data from the API'})
    else:
        # Redirect to a different URL after processing the form
        return redirect('standalone-display-page.html')  # Replace 'filtered_page' with your actual URL pattern name
    
