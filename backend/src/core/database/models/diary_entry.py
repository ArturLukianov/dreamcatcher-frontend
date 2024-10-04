from uuid import UUID, uuid4

from beanie import Document


class DiaryEntry(Document):
    entry_id: UUID = uuid4()
    # user_id: UUID
    location_name: str
