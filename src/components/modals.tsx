"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";

export const Modals = () => {

    const [mouted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mouted) return null

    return (
        <>
        <CreateWorkspaceModal/>
        </>
    )
}