<!DOCTYPE html>
<html lang="en">
<head>
    @include('guest.assets.head')
</head>
<body>
<div class="container"></div>
    @include('guest.assets.header')
    @yield('content')
    @include('guest.assets.footer')
</body>
</html>
