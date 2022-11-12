<?php

namespace Src\Authentication\Domain\Model\User;

final class RolesUsuario implements \JsonSerializable
{
    private int $id;
    private string $descripcion;

    public function __construct(int $id)
    {
        $this->id = $id;
        switch ($id) {
            case 1:
                $this->descripcion = 'Administrador';
                break;
            case 2:
                $this->descripcion = 'Corredor';
                break;
        }
    }

    public function id(): int
    {
        return $this->id();
    }

    public function descripcion(): string
    {
        return $this->descripcion();
    }

    public function __toString()
    {
        return json_encode($this->toArray());
    }

    public function jsonSerialize(): string
    {
        return json_encode($this->toArray());
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'descripcion' => $this->descripcion
        ];
    }


    public static function administrador(): self
    {
        return new self(1);
    }

    public static function corredor(): self
    {
        return new self(2);
    }

    /**
     * @return RolesUsuario[]
     */
    public function listar(): array
    {
        return [
            self::administrador(),
            self::corredor(),
        ];
    }
}
