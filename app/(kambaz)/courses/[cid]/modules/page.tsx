"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { addModule, deleteModule, updateModule, editModule as editModuleAction } from "@/app/(kambaz)/courses/[cid]/modules/reducer";

type Lesson = {
  _id: string;
  name: string;
  description?: string;
  module: string;
};

type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

export default function Modules() {
  const dispatch = useDispatch();
  const { cid } = useParams<{ cid: string }>();
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");

  const courseModules = (modules as Module[]).filter((module) => module.course === cid);


  return (
    <div>
      <FormControl
        className="mb-2"
        placeholder="Module name"
        value={moduleName}
        onChange={(event) => setModuleName(event.target.value)}
      />
      <div className="mb-4">
        <Button 
          variant="primary" 
          onClick={() => {
            if (moduleName.trim()) {
              dispatch(addModule({ name: moduleName, course: cid }));
              setModuleName("");
            }
          }}
        >
          Add Module
        </Button>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {courseModules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.editing ? (
                <input
                  autoFocus
                  type="text"
                  value={module.name}
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  className="form-control d-inline-block w-50"
                />
              ) : (
                <>{module.name}</>
              )}
              <ModuleControlButtons moduleId={module._id} editModule={(moduleId) => dispatch(editModuleAction(moduleId))} deleteModule={(moduleId) => dispatch(deleteModule(moduleId))} />
              <button
                className="btn btn-sm btn-danger float-end me-2"
                onClick={() => dispatch(deleteModule(module._id))}
                id="wd-delete-module-click"
              >
                Delete
              </button>
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {module.lessons && module.lessons.map((lesson) => (
                <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name}
                  <LessonControlButtons />
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
