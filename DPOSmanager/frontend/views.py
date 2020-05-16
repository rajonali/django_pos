from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def dashboard(request):
    return render(request, 'frontend/dashboard.html')

def products(request):
    return render(request, 'frontend/products.html')

def metrics(request):
    return render(request, 'frontend/metrics.html')

def settings(request):
    return render(request, 'frontend/settings.html')

def transactions(request):
    return render(request, 'frontend/transactions.html')
