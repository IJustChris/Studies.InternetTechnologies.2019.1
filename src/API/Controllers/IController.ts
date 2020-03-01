import express from "express";

export default interface IController
{
    SetupEndpoints(application: express.Application)
}