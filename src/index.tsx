/*
 * @Author: Viccsen
 * @Date: 2023-06-02 15:20:13
 * @LastEditTime: 2024-06-05 15:33:51
 * @LastEditors: Viccsen
 * @Description: npm version patch -m "feat: xxx" | npm publish
 */
import React, { FC, useEffect, useState, useRef } from "react";
import { loadMicroApp, MicroApp, FrameworkConfiguration } from "qiankun";

type Props = {
  url: string;
  config?: any;
  className?: string;
  qiankunConfig?: FrameworkConfiguration;
  beforeRequest?: (options: any) => any;
  getRouter?: () => {
    reload: Function;
    redirect: Function;
    back: Function;
    forward: Function;
    pushState: Function;
    openTab: Function;
  };
  getCurrentMicroApp?: (microAppInstance: any) => void;
};

const MircoApp: FC<Props> = (props) => {
  const { url, className, beforeRequest, getRouter, config = {}, qiankunConfig = {}, getCurrentMicroApp } = props;

  const [microApp, setMicroApp] = useState<MicroApp>();

  const containerRef = useRef(null);

  const loadMicro = (url: string, name?: string) => {
    const microApp = loadMicroApp({
      name: name || url, // app name registered
      entry: url,
      container: containerRef?.current,
      props: {
        config: {
          beforeRequest,
          getRouter,
        },
        vars: config,
        extVars: {
          getRouter,
          customVars: config
        },
        extCallConnector: {
          before: beforeRequest
        }
      },
    }, qiankunConfig);
    setMicroApp(microApp);
    getCurrentMicroApp && getCurrentMicroApp(microApp);
  };

  useEffect(() => {
    if (url && containerRef?.current) {
      if (!microApp) {
        loadMicro(url, "bugu-microapp-" + Date.now());
      } else {
        const status = microApp.getStatus();
        if (status === "NOT_MOUNTED") {
          loadMicro(url);
          return;
        }
        microApp.unmountPromise.then(() => {
          microApp.unmount().then(() => {
            loadMicro(url);
          });
        });
      }
    } else if (!url && microApp) {
      const status = microApp.getStatus();
      if (status === "MOUNTED") {
        microApp.mountPromise.then(() => {
          microApp.unmount();
        });
      }
    }
  }, [url, containerRef?.current]);

  return (
    <div className={className}>
      <div ref={containerRef} />
    </div>
  );
};

export default MircoApp;
