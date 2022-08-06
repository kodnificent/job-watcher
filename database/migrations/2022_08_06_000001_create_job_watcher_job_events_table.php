<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobWatcherJobEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_watcher_job_events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_id')->nullable();
            $table->string('status');
            $table->timestamps();

            $table->foreign('job_id')
                ->references('id')
                ->on('job_watcher_jobs')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('job_watcher_job_events')) {
            Schema::table('job_watcher_job_events', function (Blueprint $table) {
                $table->dropForeign(['job_id']);
                $table->drop();
            });
        }
    }
}
