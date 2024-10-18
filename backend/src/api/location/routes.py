from fastapi import APIRouter

from api.location.repository import LocationRepository
from api.location.schemas import CreateLocationSchema

from core.database.models import Location, LocationType

location_router = APIRouter()


@location_router.get("/locations", response_model=list[Location])
async def get_all_locations():
    return await LocationRepository.get_all_locations()


@location_router.post("/location")
async def create_location(body: CreateLocationSchema):
    await LocationRepository.create_location(body.location_name, body.location_type)
