package com.packsomething;
import java.util.*;
import java.util.logging.*;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.File;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;
import java.util.zip.ZipInputStream;


public class DoMain{
    public static void main(String[] arg){

        doParam(1,23,4);

    }

    static void doParam(int... its){   
        try{
            
            File direction = new File("");

            FileOutputStream zipOS = new FileOutputStream(direction.getAbsolutePath() + File.separator + "errs.zip");
            StringBuilder strs = new StringBuilder("im ");
            strs = strs.append("write ");
            strs = strs.append("down ");
            strs = strs.append("here ");
            strs = strs.append("!\n");
            byte[] b = strs.toString().getBytes("GBK");
            
            /**����˼�뻹�ǣ�
             * 1������һ���յ�zip�����ļ����ͣ�
             * 2������һ��Ŀ¼��Ȼ��ȡ�����֣�new ZipEntry(fileName)��
             * 3����zip��Ŀ����Խӵ�zip�������ָ����ַ��putNextEntry(ze)��
             * 4��Ȼ������� ָ����ַ д����
             * 5���ر��������������
            */
            ZipOutputStream zos = new ZipOutputStream(zipOS); //���ļ���ת����zip��
            ZipEntry ze = new ZipEntry("err.log");// ����һ��zip��Ŀ���������ȡ������
            zos.putNextEntry(ze); // �Ѹոմ�����zip��Ŀ�ӽ�zip�����
            zos.write(b,0,b.length); // ��I/O�ӿ�����д����
            zos.closeEntry();   //�ر������
            

        }catch(Exception e){

        }
    }
}

class ObjectAnalyzer{
    public String toString(Object obj){
        String res = "[";
        do{

        }
        while (false);

        return res;
    }
}



