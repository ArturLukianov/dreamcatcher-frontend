from uuid import UUID, uuid4

from beanie import Document


class Connection(Document):
    connection_id: UUID = uuid4()
    location_1_id: UUID
    locations_2_id: UUID