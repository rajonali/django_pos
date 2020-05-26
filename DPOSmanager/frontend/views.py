from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/dashboard.html')

def dashboard(request):
    return render(request, 'frontend/dashboard.html')

def products(request):
    return render(request, 'frontend/dashboard.html')

def metrics(request):
    return render(request, 'frontend/dashboard.html')

def settings(request):
    return render(request, 'frontend/dashboard.html')

def transactions(request):
    return render(request, 'frontend/dashboard.html')
