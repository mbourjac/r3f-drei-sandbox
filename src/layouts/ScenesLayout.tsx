import { Outlet } from '@tanstack/react-router';

export const ScenesLayout = () => {
  return (
    <div className="h-dvh">
      <Outlet />
    </div>
  );
};
