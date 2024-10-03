from uuid import UUID, uuid4
from enum import Enum

from beanie import Document


class LocationType(Enum):
    HOME = "HOME"
    FOREST = "FOREST"


class Location(Document):
    location_id: UUID = uuid4()
    name: str
    coordinates: tuple[int, int] | None = None
    type: LocationType
