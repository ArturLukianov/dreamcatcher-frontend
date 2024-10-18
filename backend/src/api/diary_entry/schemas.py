from pydantic import BaseModel

from core.database.models import LocationType


class CreateEntrySchema(BaseModel):
    location_name: str
    location_type: LocationType
    description: str