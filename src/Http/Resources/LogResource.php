<?php

namespace Kodnificent\JobWatcher\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LogResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->name,
            'connection' => $this->connection,
            'queue' => $this->queue,
            'payload' => $this->payload,
            'unserialized_data' => $this->unserialized_data,
            'max_attempts' => $this->max_attempts,
            'attempts' => $this->attempts,
            'exception' => $this->exception,
            'status' => $this->status,
            'created_at' => $this->created_at->format('j M y\' H:i:s'),
            'updated_at' => $this->updated_at->format('j M y\' H:i:s'),
        ];
    }
}
