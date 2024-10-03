from fastapi import APIRouter

from api.connection.repository import ConnectionRepository

from core.database.models import Connection


connection_router = APIRouter()


@connection_router.post("/connection")
async def create_connection(location_1_name: str, location_2_name: str):
    await ConnectionRepository.create_connection(location_1_name, location_2_name)


@connection_router.get("/connections", response_model=list[Connection])
async def get_all_connections():
    return await ConnectionRepository.get_all_connections()