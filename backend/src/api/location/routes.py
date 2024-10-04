from fastapi import APIRouter

from api.location.repository import LocationRepository

from core.database.models import Location

location_router = APIRouter()


@location_router.get("/locations", response_model=list[Location])
async def get_all_locations():
    return await LocationRepository.get_all_locations()
