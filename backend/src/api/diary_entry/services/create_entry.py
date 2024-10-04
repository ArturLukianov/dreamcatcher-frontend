from api.diary_entry.repository import DiaryEntryRepository

from api.location.repository import LocationRepository
from core.database.models import LocationType


class CreateEntryService:
    @staticmethod
    async def create_entry(location_name: str, location_type: LocationType):
        location = await LocationRepository.get_location(location_name)
        if location is None:
            # create location is it does not exist
            await LocationRepository.create_location(location_name, location_type)

        await DiaryEntryRepository.create_entry(location_name)
        
