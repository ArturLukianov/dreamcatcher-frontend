from uuid import UUID, uuid4

from beanie import Document


class Connection(Document):
    connection_id: UUID = uuid4()
    location_1_name: str
    locations_2_name: str