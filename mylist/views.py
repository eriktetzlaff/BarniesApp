from django.shortcuts import render
from .models import ShoppingItem
# Create your views here.
def list(request):
    if request.method == 'POST':
        print('Received data:', request.POST['itemName'])
        ShoppingItem.objects.create(name = request.POST['itemName'])
    all_items = ShoppingItem.objects.all()
    return render(request, 'list.html', {'all_items': all_items})
