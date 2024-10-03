from fastapi import APIRouter

from api.diary_entry.services.create_entry import CreateEntryService
from api.diary_entry.repository import DiaryEntryRepository

from core.database.models import LocationType, DiaryEntry


diary_entry_router = APIRouter()


@diary_entry_router.post("/diary_entry")
async def create_diary_entry(location_name: str, location_type: LocationType):
    await CreateEntryService.create_entry(location_name=location_name, location_type=location_type)


@diary_entry_router.get("/all_diary_entries", response_model=list[DiaryEntry])
async def get_all_entries():
    return await DiaryEntryRepository.get_all_entries()