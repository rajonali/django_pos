from rest_framework import routers
from .api import BackendViewSet, EmployeesViewSet, ProductsViewSet

router = routers.DefaultRouter()
router.register('api/backend', BackendViewSet, 'backend')
router.register('api/employees', EmployeesViewSet, 'employees')
router.register('api/products', ProductsViewSet, 'products')

urlpatterns = router.urls