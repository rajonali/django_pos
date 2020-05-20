from rest_framework import routers
from .api import EmployeesViewSet, ProductsViewSet, TransactionsViewSet, CartViewSet

router = routers.DefaultRouter()
router.register('api/employees', EmployeesViewSet, 'employees')
router.register('api/products', ProductsViewSet, 'products')
router.register('api/transactions', TransactionsViewSet, 'transactions')
router.register('api/cart', CartViewSet, 'cart')


urlpatterns = router.urls