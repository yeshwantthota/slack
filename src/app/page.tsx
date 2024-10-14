"use client";
import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useEffect, useMemo } from "react";
export default function Home() {
  
  const [open ,setOpen] = useCreateWorkspaceModal()

  const {data, isLoading} = useGetWorkspaces()

  const workSpaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {

    if(isLoading) return;
    if(workSpaceId){
      console.log("Redirect to workspace")
    }else if(!open){
      setOpen(true)
      console.log("Open Creation Modal")
    }
  }, [workSpaceId, isLoading, open, setOpen]);

  return (
    
    <div>
      <UserButton/>
    </div>
  ); 
}
