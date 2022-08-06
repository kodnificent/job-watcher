<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobWatcherJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_watcher_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('uuid');
            $table->string('name');
            $table->string('connection');
            $table->string('queue');
            $table->longText('payload');
            $table->longText('unserialized_data');
            $table->unsignedSmallInteger('max_attempts')->nullable();
            $table->unsignedSmallInteger('attempts');
            $table->longText('exception')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_watcher_jobs');
    }
}
