<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="text-gray-900 leading-tight">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <title>Job Watcher | {{config('app.name') }}</title>
    <link rel="stylesheet" href="{{ mix('css/app.css', 'vendor/job-watcher') }}">
  </head>
  <body>
    <div id="app">
      <router-view />
    </div>

    <script>
      window.config = @json(\Kodnificent\JobWatcher\Facades\JobWatcher::jsConfig());
    </script>

    <script src="{{ mix('js/manifest.js', 'vendor/job-watcher') }}"></script>
    <script src="{{ mix('js/vendor.js', 'vendor/job-watcher') }}"></script>
    <script src="{{ mix('js/app.js', 'vendor/job-watcher') }}"></script>
  </body>
</html>
