from pydantic import BaseModel

from core.database.models import LocationType


class CreateLocationSchema(BaseModel):
    location_name: str
    location_type: LocationType
