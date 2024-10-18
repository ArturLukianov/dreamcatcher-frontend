from fastapi import APIRouter

from api.diary_entry.services.create_entry import CreateEntryService
from api.diary_entry.repository import DiaryEntryRepository

from core.database.models import DiaryEntry

from api.diary_entry.schemas import CreateEntrySchema


diary_entry_router = APIRouter()


@diary_entry_router.post("/diary_entry")
async def create_diary_entry(body: CreateEntrySchema):
    await CreateEntryService.create_entry(location_name=body.location_name, location_type=body.location_type, description=body.description)


@diary_entry_router.get("/all_diary_entries", response_model=list[DiaryEntry])
async def get_all_entries():
    return await DiaryEntryRepository.get_all_entries()