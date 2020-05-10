from rest_framework import routers
from .api import App1ViewSet

router = routers.DefaultRouter()
router.register('api/app1', App1ViewSet, 'app1')

urlpatterns = router.urls