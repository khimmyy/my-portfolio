<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ config('app.name', 'Khimberly Portfolio') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-50 text-gray-900">
     
    <nav class="fixed top-0 w-full bg-black/90 backdrop-blur-md shadow-sm z-50">
        <div class="w-full px-8">
        <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="bg-text px-37 text-left text-2xl font-bold text-white flex items-center">Fontanilla</div>

        <!-- Nav Links -->
        <div class="hidden md:flex space-x-8 items-center">
            <a href="/" class="text-slate-300 hover:text-pink-400 transition">Home</a>
            <a href="#about" class="text-slate-300 hover:text-pink-400 transition">About</a>
            <a href="#services" class="text-slate-300 hover:text-pink-400 transition">Services</a>
            <a href="#projects" class="text-slate-300 hover:text-pink-400 transition">Projects</a>
            <a href="#contact" class="text-slate-300 hover:text-pink-400 transition">Contact</a>
        </div>
        </div>
        </div>
</nav>


    <main class="max-w-screen min-h-screen pt-16">
        @yield('content')
    </main>

    <footer class="p-6 text-center text-sm text-gray-500">
        Built with Laravel & Tailwind by Khimberly
    </footer>
</body>
</html>
