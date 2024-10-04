from core.database.models import Location, LocationType


class LocationRepository:
    @staticmethod
    async def create_location(name: str, type: LocationType):
        await Location(name=name, type=type).create()

    @staticmethod
    async def get_location(name: str):
        return await Location.find_one(Location.name == name)
    
    @staticmethod
    async def get_all_locations():
        return await Location.find_all().to_list()