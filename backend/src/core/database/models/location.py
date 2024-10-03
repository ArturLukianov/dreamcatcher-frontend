from uuid import UUID, uuid4

from beanie import Document


class Location(Document):
    location_id: UUID = uuid4()
    name: str
    coordinates: tuple[int, int]
    type: str  # TODO: add enum for typess
