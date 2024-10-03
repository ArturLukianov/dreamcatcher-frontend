from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient

from core.database.models import MODELS


async def initialize_database():
    client = AsyncIOMotorClient()
    await init_beanie(
        database=client.DreamCatcher,
        document_models=MODELS
    )