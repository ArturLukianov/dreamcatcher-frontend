from core.database.models import Connection


class ConnectionRepository:
    @staticmethod
    async def create_connection(location_1_name: str, location_2_name: str):
        await Connection(location_1_name=location_1_name, locations_2_name=location_2_name).create()

    @staticmethod
    async def get_all_connections():
        return await Connection.find_all().to_list()