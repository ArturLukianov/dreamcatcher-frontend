import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager

from core.database.db import initialize_database

from api.diary_entry.routes import diary_entry_router
from api.location.routes import location_router
from api.connection.routes import connection_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await initialize_database()
    yield


app = FastAPI(lifespan=lifespan)

origins = ["https://dev.bro-js.ru/", "https://dev.bro-js.ru/dreamcatcher"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = [origins],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

app.include_router(diary_entry_router)
app.include_router(location_router)
app.include_router(connection_router)

if __name__ == "__main__":
    uvicorn.run(app)