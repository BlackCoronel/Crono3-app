<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Src\Authentication\Domain\Model\User\RolesUsuario;

class User extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@crono3.es',
            'password' => Hash::make('secret'),
            'role' => RolesUsuario::administrador()->id(),
            'politica_privacidad' => true
        ]);
    }
}
