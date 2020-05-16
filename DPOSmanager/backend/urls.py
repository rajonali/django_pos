from rest_framework import routers
from .api import EmployeesViewSet, ProductsViewSet, TransactionsViewSet

router = routers.DefaultRouter()
router.register('api/employees', EmployeesViewSet, 'employees')
router.register('api/products', ProductsViewSet, 'products')
router.register('api/transactions', TransactionsViewSet, 'transactions')


urlpatterns = router.urls