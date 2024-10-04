from uuid import UUID, uuid4

from beanie import Document


class User(Document):
    user_id: UUID = uuid4()
