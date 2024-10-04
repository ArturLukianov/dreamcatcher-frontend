from core.database.models import DiaryEntry


class DiaryEntryRepository:
    @staticmethod
    async def create_entry(location_name: str):
        await DiaryEntry(location_name=location_name).create()

    @staticmethod
    async def get_all_entries():
        return await DiaryEntry.find_all().to_list()