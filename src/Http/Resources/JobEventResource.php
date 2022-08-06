<?php

namespace Kodnificent\JobWatcher\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JobEventResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'job' => JobResource::make($this->job),
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
